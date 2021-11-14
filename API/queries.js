//const checkIdExists = "SELECT i FROM users WHERE i.id = $1";
const getUsers = "SELECT * FROM users";

const join = "SELECT * FROM users JOIN profile USING (id)";
const usersPag = join + " LIMIT $2 OFFSET (($1 -1)*$2)";
const userById = join + " WHERE id = $1";

const newUser = "INSERT INTO users (id, name, email) VALUES ($1, $2, $3) RETURNING *";
const newProf = "INSERT INTO profile (id, class, major, sport, city, state, image, socials) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";

const updateUser = "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *";
const updateProf = "UPDATE profile SET class = $1, major = $2, sport = $3, city = $4, state = $5, image = $6, socials = $7 WHERE id = $8 RETURNING *";



function filter(name, sport, major, afterClass, beforeClass, state) {
    var conditions = "";

    if (name) {
        conditions += " (name ILIKE '%" + name + "%') ";
    }

    if (sport) {
        if(conditions) {
            conditions += " AND ";
        }
        conditions += "('" + sport + "' = ANY(sport) )";
    }

    if (major) {
        if(conditions) {
            conditions += " AND ";
        }

        conditions += "('" + major + "' = ANY(major) )";
    }

    if (afterClass) {
        if(conditions) {
            conditions += " AND ";
        }

        conditions += "( class > '" + afterClass + "' )";
    }

    if (beforeClass) {
        if(conditions) {
            conditions += " AND ";
        }

        conditions += "( class < '" + beforeClass + "' )";
    }

    if (state) {
        if(conditions) {
            conditions += " AND ";
        }

        conditions += "( state = '" + state + "' )";
    }


    var conditions = join + " WHERE (" + conditions + ")";

    return conditions;
}

module.exports = {
    getUsers,
    usersPag,
    userById,
    newUser,
    newProf,
    updateUser,
    updateProf,
    filter,
};