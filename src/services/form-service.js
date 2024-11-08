const { FormRepository } = require('../repositories');

const formRepository = new FormRepository();

async function createForm(data) {
    try {
        const form = await formRepository.create(data);
        return form;
    } catch (error) {
        throw error;
    }
}

async function getForms() {
    try {
        const forms = await formRepository.getAll();
        return forms;
    } catch (error) {
        throw error;
    }
}

async function getForm(id) {
    try {
        const form = await formRepository.get(id);
        return form;
    } catch (error) {
        throw error;
    }
}

async function updateForm(id, data) {
    try {
        const form = await formRepository.update(id, data);
        return form;
    } catch (error) {
        throw error;
    }
}

async function deleteForm(id) {
    try {
        const form = await formRepository.destroy(id);
        return form;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createForm,
    getForms,
    getForm,
    updateForm,
    deleteForm
}