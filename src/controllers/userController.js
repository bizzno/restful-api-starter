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
Update 21 on 2014-01-16 03:10:32
Update 26 on 2014-01-17 20:16:07
Update 27 on 2014-01-17 12:22:58
Update 34 on 2014-01-20 18:11:28
Update 41 on 2014-01-22 16:25:08
