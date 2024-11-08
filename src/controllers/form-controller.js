const { FormService } = require('../services');


async function createForm(req, res) {
    try {
        const form = await FormService.createForm(req.body);
        return res.status(201).json(form);
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function getForms(req, res) {
    try {
        const forms = await FormService.getForms();
        return res.status(200).json(forms);
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function getForm(req, res) {
    try {
        const form = await FormService.getForm(req.params.id);
        return res.status(200).json(form);
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function updateForm(req, res) {
    try {
        const form = await FormService.updateForm(req.params.id, req.body);
        return res.status(200).json(form);
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function deleteForm(req, res) {
    try {
        const form = await FormService.deleteForm(req.params.id);
        return res.status(200).json(form);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    createForm,
    getForms,
    getForm,
    updateForm,
    deleteForm
}