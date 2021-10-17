import { gql } from "@apollo/client";


export const Load_Songs = gql`
{
  allSongs {
    _id
    title
  }
}`;

export const GET_ONE_SONG = gql`
query Get_A_Song($_id: ID!){
  getSong(_id: $_id){
    title
    lyric {
      _id
      content
      likes
    }
  }
}`;

export const ADD_SONG = gql`
mutation Add_Song($title: String!){
  addSong(title: $title){
    _id
  }
}`;

export const DELETE_SONG = gql`
mutation Delete_Song($_id: ID!){
    deleteSong(_id: $_id){
      _id
    }
}`;


export const ADD_LYRICS_SONG = gql`
mutation add_Lyrics_Song($content: String, $songId: ID!){
  addLyricToSong(content: $content, songId: $songId){
    _id
  }
}`;

export const ADD_LIKES_LYRICS = gql`
mutation add_Likes_Lyrics($_id: ID!){
  likeLyric(_id: $_id){
    _id
    likes
  }
}`;













