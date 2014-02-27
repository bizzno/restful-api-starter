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
Update 48 on 2014-01-22 18:15:09
Update 50 on 2014-01-22 18:05:40
Update 54 on 2014-01-26 14:52:37
Update 58 on 2014-01-26 11:28:34
Update 65 on 2014-01-28 22:15:05
Update 74 on 2014-01-29 07:44:51
Update 80 on 2014-01-29 20:59:39
Update 81 on 2014-01-29 03:24:17
Update 88 on 2014-01-31 02:18:11
Update 89 on 2014-01-31 05:07:59
Update 90 on 2014-02-03 03:46:40
Update 94 on 2014-02-03 15:46:43
Update 104 on 2014-02-04 18:26:03
Update 105 on 2014-02-04 09:11:05
Update 109 on 2014-02-04 19:19:24
Update 110 on 2014-02-04 02:58:47
Update 118 on 2014-02-10 17:53:07
Update 123 on 2014-02-10 07:54:59
Update 129 on 2014-02-14 19:48:14
Update 130 on 2014-02-14 01:45:32
Update 135 on 2014-02-14 02:52:22
Update 143 on 2014-02-17 21:48:40
Update 159 on 2014-02-24 20:00:41
Update 162 on 2014-02-24 19:31:13
Update 167 on 2014-02-24 01:47:53
Update 169 on 2014-02-27 14:50:14
