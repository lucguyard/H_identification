const db = require("../database/db.js");

class Post{
    constructor(name, password){
        this.name = name;
        this.password = password;
    }

    async save()
    {
        let sql = `INSERT INTO connection(
            name,
            password
        )
        VALUES(
            '${this.name}',
            '${this.password}'
        )`;

        
        const [newPost, _] = await db.execute(sql);

        return newPost;
    }

    async searchName()
    {
        let search = `SELECT name FROM connection where name like '${this.name}'`;

        const [newPost, _] = await db.execute(search);

        return newPost;
    }

    async searchPassword()
    {
        let search = `SELECT password FROM connection where password like '${this.password}'`;

        const [newPost, _] = await db.execute(search);

        return newPost;
    }
}


module.exports = Post;