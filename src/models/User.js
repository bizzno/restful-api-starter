// User model
class User {
  constructor(data) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
  }

  static async findById(id) {
    // TODO: Implement database query
    return null;
  }
}

module.exports = User;
Update 1 on 2014-01-08 06:29:13
Update 5 on 2014-01-08 05:04:29
