const {Types} = require('mongoose');
const { Thought, User, Reaction } = require('../models');


const ThoughtController = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find({});
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get thought
  async getOneThought(req, res) {
    try {
      const thought = await Thought.findOne({_id:req.params.thoughtId});
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Creating thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.status(201).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // Delete thought
  async deleteThought(req,res) {
    try {
        const thought = await Thought.findByIdAndDelete({_id:req.params.thoughtId});
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
  },

  // Updating thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
        new: true,
      });
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Creating reaction
  async createReaction(req, res) {
      try {
        const thought = await Thought.findOneAndUpdate(
            {_id:req.params.thoughtId},
            {$addToSet: {reactions: req.body}},
            {runValidators: true, new: true}
        );
        thought ? res.json(thought) : res.status(404).json({message: notFound});
    } catch (e) {
        res.status(500).json(e);
    }
  },

// Delete reaction from thought
  async deleteReaction(req, res) {
      try {
        const thought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {reactions: {reactionId: req.params.reactionId}}},
            {runValidators: true, new: true}
        );

        thought ? res.json(thought) : res.status(404).json({message: 'There is no reaction, sorry!'});
    } catch (e) {
        res.status(500).json(e);
    }
  },

};
// Export ThoughtController
module.exports = ThoughtController;