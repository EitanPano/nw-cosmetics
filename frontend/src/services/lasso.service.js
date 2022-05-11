//* Local Asynchronous Storage Service Offline. *//

export const lassoService = { get, post, put, delete: remove, postMany };


async function get(entityType, filterBy = {}, delay = 500) {
    if (entityType.includes('/')) return getById(entityType)
    let entities = JSON.parse(localStorage.getItem(entityType)) || [];
    if (filterBy) entities = _filter(entities, filterBy);
    return new Promise((resolve) => {
        setTimeout(() => resolve(entities), delay);
    });
}

async function getById(path) {
    const [entityType, entityId] = path.split('/');
    return get(entityType).then((entities) =>
        entities.find((entity) => entity._id === entityId)
    );
}

async function post(entityType, newEntity) {
    newEntity._id = _makeId();
    return get(entityType).then((entities) => {
        entities.push(newEntity);
        _save(entityType, entities);
        return newEntity;
    });
}

async function put(entityType, updatedEntity) {
    return get(entityType).then((entities) => {
        const idx = entities.findIndex(
            (entity) => entity._id === updatedEntity._id
        );
        entities.splice(idx, 1, updatedEntity);
        _save(entityType, entities);
        return updatedEntity;
    });
}

async function remove(path) {
    const [entityType, entityId] = path.split('/');
    return get(entityType).then((entities) => {
        const idx = entities.findIndex((entity) => entity._id === entityId);
        if (idx < 0) throw new Error(`Unknown Entity ${entityId}`);
        entities.splice(idx, 1);
        _save(entityType, entities);
    });
}

async function postMany(entityType, newEntities) {
    return get(entityType).then((entities) => {
        entities.push(...newEntities);
        _save(entityType, entities);
        return entities;
    });
}

const _filter = (entities, filterBy) => {
    // Define & Destructure filterBy keys
    let { name, brand, category, minPrice, maxPrice } = filterBy;
    name = name ? name.toLowerCase() : '';
    brand = brand ? brand.toLowerCase() : '';
    category = category ? category.toLowerCase() : '';

    /// * FilterBy keys should match the Entity keys! * ///
    return entities.filter(entity =>
            _filterString(entity.name, name) &&
            _filterString(entity.brand, brand) &&
            _filterString(entity.category, category) &&
            _filterPrice(entity.price, minPrice, maxPrice)
    );
}

const _save = (entityType, entities) => {
    localStorage.setItem(entityType, JSON.stringify(entities));
}

const _makeId = (length = 5) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

// Note: Sub-Functions for the "_filter" function.
const _filterString = (key, str) => key ? key.toLowerCase().includes(str) : false;
const _filterPrice = (price, min = 0, max = Infinity) => price >= min && price <= max;

