// User controller
class UserController {
  async getAll(req, res) {
    try {
      res.json({ users: [] });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    res.json({ id, user: {} });
  }
}

module.exports = new UserController();
Update 15 on 2014-01-14 15:07:32
