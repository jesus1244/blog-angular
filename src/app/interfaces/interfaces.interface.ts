export interface user{
    id:         number;
    user:       string;
    password:   string;
    username:   string,
    
}

export interface sendComment {
    id_user:    number;
    id_forum:   string | null;
    comment:    string;
}

export interface comment {
    id_user:    number;
    comment:    string;
    username:   string;
    name:       string;
    id:         number;
    id_comment: number;
}

export interface forum {
    name:       string;
    id:         number;
    id_user:    number;
}
export interface tokenUser{
    user:       user;
    iat:        string;
}