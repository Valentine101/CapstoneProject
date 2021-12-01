//const checkIdExists = "SELECT i FROM users WHERE i.id = $1";
const getUsers = "SELECT * FROM users";

const join = 'SELECT * FROM users JOIN profile USING (id) WHERE ("isConfirmed"=true)';
const usersPag = join + " LIMIT $2 OFFSET (($1 -1)*$2)";
const userById = join + " AND email = $1";

const newUser = "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *";
const newProf = "INSERT INTO profile (id, class, major, sport, city, state, image, socials) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";

const updateUser = "UPDATE users SET name = $1, email = $2, \"isConfirmed\"=false WHERE id = $3 RETURNING *";
const updateProf = "UPDATE profile SET class = $1, major = $2, sport = $3, city = $4, state = $5, image = $6, socials = $7 WHERE id = $8 RETURNING *";

const updateIsAdmin = 'UPDATE users SET "isAdmin" = NOT "isAdmin" WHERE email=$1';

const unconfirmed = 'SELECT * FROM users JOIN profile USING (id) WHERE ("isConfirmed"=false)'

const updateUnconfirmed = 'UPDATE users SET "isConfirmed"=true WHERE email=$1'

const deleteUserTruple = 'DELETE FROM users WHERE email=$1 RETURNING *';
const deleteProfileTruple = 'DELETE FROM profile WHERE id=$1';

//The commented out lines are lines which utilize temp variables.
//they are meant to stop sql injection, however they do not appear to work well in this instance
function filter(name, sport, major, afterClass, beforeClass, state) {
    var conditions = "";

    if(!(name || sport || major|| afterClass|| beforeClass|| state)) {
        return join;
    }

    if (name) {
        conditions += " AND (name ILIKE '%" + name + "%') ";
        //conditions += " (name ILIKE '%$1%') ";
    }

    if (sport) {
        if(conditions) {
            conditions += " AND ";
        }
        conditions += "('" + sport + "' = ANY(sport) )";
        //conditions += "('$2' = ANY(sport) )";
    }

    if (major) {
        if(conditions) {
            conditions += " AND ";
        }

        conditions += "('" + major + "' = ANY(major) )";
        //conditions += "('$3' = ANY(major) )";
    }

    if (afterClass) {
        if(conditions) {
            conditions += " AND ";
        }

        conditions += "( class > '" + afterClass + "' )";
        //conditions += "( class > '$4' )";
    }

    if (beforeClass) {
        if(conditions) {
            conditions += " AND ";
        }

        conditions += "( class < '" + beforeClass + "' )";
        //conditions += "( class < '$5' )";
    }

    if (state) {
        if(conditions) {
            conditions += " AND ";
        }

        conditions += "( state = '" + state + "' )";
        //conditions += "( state = '$6' )";
    }


    var conditions = join + " AND (" + conditions + ")";

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
    unconfirmed,
    updateUnconfirmed,
    deleteUserTruple,
    deleteProfileTruple,
    updateIsAdmin,
    filter,
};