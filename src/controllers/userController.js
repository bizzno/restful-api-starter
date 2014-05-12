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
Update 176 on 2014-02-27 14:57:24
Update 184 on 2014-03-02 13:46:03
Update 187 on 2014-03-02 00:12:56
Update 189 on 2014-03-03 04:05:20
Update 194 on 2014-03-03 13:08:46
Update 199 on 2014-03-04 12:13:14
Update 208 on 2014-03-04 07:09:05
Update 212 on 2014-03-05 06:35:23
Update 214 on 2014-03-05 01:57:34
Update 217 on 2014-03-05 00:07:06
Update 219 on 2014-03-05 22:35:31
Update 220 on 2014-03-05 22:36:58
Update 232 on 2014-03-10 15:43:09
Update 234 on 2014-03-10 12:26:21
Update 235 on 2014-03-10 19:10:47
Update 237 on 2014-03-10 02:40:25
Update 238 on 2014-03-11 03:02:03
Update 244 on 2014-03-13 20:00:10
Update 245 on 2014-03-13 19:50:01
Update 248 on 2014-03-13 15:32:11
Update 250 on 2014-03-13 16:45:31
Update 265 on 2014-03-28 20:28:41
Update 266 on 2014-03-28 04:36:54
Update 268 on 2014-03-28 07:08:59
Update 269 on 2014-03-28 01:31:48
Update 274 on 2014-03-31 02:47:59
Update 275 on 2014-03-31 07:29:24
Update 278 on 2014-04-01 19:40:27
Update 281 on 2014-04-01 04:50:28
Update 293 on 2014-04-09 19:20:30
Update 295 on 2014-04-09 07:18:13
Update 296 on 2014-04-11 05:15:37
Update 308 on 2014-04-18 18:18:37
Update 309 on 2014-04-18 10:28:49
Update 314 on 2014-04-18 04:27:40
Update 317 on 2014-04-18 05:13:48
Update 320 on 2014-04-21 20:51:29
Update 321 on 2014-04-21 02:40:35
Update 340 on 2014-04-24 14:51:33
Update 341 on 2014-04-24 06:08:58
Update 342 on 2014-04-24 08:33:55
Update 343 on 2014-04-24 12:20:57
Update 353 on 2014-05-06 14:55:19
Update 354 on 2014-05-06 11:04:40
Update 363 on 2014-05-07 04:49:52
Update 364 on 2014-05-07 11:36:31
Update 373 on 2014-05-11 14:00:38
Update 374 on 2014-05-11 23:25:43
Update 376 on 2014-05-12 09:59:39
Update 377 on 2014-05-12 02:45:33
Update 379 on 2014-05-12 21:01:54
