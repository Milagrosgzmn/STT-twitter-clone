
export interface User{
    user_id: string;
    user_username: string;
    user_firstName: string;
    user_password: string;
    user_lastName: string;
    user_email: string;
    user_country: string | null;
    user_profilePic: string | null;
    user_phoneNumber: number;
  };
  export interface UserWithoutPassword {
    user_id: string;
    user_username: string;
    user_firstName: string;
    user_lastName: string;
    user_email: string;
    user_country: string | null;
    user_profilePic: string | null;
    user_phoneNumber: number;
}
export interface Media{
    multimedia_id: string;
    parent_id:string;
  }

export interface Comment{
    comment_id: string;
    user_id: string;
    tweet_id: string;
    likes: number | null,
    retweets: number | null,
    text: string;
    multimedia_id:string | null;
    createdAt: Date;
  };
  
export interface Notification{
  notification_id: string;
  notification_type:string;
  user_id:string;
  related_id:string;
  is_read:boolean | null;
};

export interface Retweet{
    retweet_id: string;   
    user_id: string;
    text: string | null; // preguntar
    multimedia_id: string | null;
    tweet_id:string;
    created_at: Date;
  };

export interface Tweet{
    tweet_id: string,
    user_id: string,
    text: string | null, // preguntar
    multimedia_id: string | null,
    likes: number | null,
    retweets: number | null,
    comments: string[] | null,
    created_at: Date,
};
