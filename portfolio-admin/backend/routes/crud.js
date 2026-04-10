const router   = require('express').Router();
const auth     = require('../middleware/auth');
const Project       = require('../models/Project');
const Experience    = require('../models/Experience');
const Education     = require('../models/Education');
const Skill         = require('../models/Skill');
const Blog          = require('../models/Blog');
const Certification = require('../models/Certification');

const models = {
  projects:       Project,
  experiences:    Experience,
  educations:     Education,
  skills:         Skill,
  blogs:          Blog,
  certifications: Certification,
};

// Public GET — portfolio reads from here
router.get('/:resource', async (req, res) => {
  const Model = models[req.params.resource];
  if (!Model) return res.status(404).json({ error: 'Resource not found' });
  try {
    const data = await Model.find().sort({ order: 1, createdAt: -1 });
    res.json(data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.get('/:resource/:id', async (req, res) => {
  const Model = models[req.params.resource];
  if (!Model) return res.status(404).json({ error: 'Resource not found' });
  try {
    const item = await Model.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Protected — admin only
router.post('/:resource', auth, async (req, res) => {
  const Model = models[req.params.resource];
  if (!Model) return res.status(404).json({ error: 'Resource not found' });
  try {
    const item = await new Model(req.body).save();
    res.status(201).json(item);
  } catch (e) { res.status(400).json({ error: e.message }); }
});

router.put('/:resource/:id', auth, async (req, res) => {
  const Model = models[req.params.resource];
  if (!Model) return res.status(404).json({ error: 'Resource not found' });
  try {
    const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
  } catch (e) { res.status(400).json({ error: e.message }); }
});

router.delete('/:resource/:id', auth, async (req, res) => {
  const Model = models[req.params.resource];
  if (!Model) return res.status(404).json({ error: 'Resource not found' });
  try {
    await Model.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
