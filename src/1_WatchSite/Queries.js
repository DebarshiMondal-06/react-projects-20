import { gql } from "@apollo/client";

export const LOAD_WATCHES = gql`
{
  watches {
    id,
    name,
    brand,
    price,
  }
}`;

export const LOAD_ONE_WATCH = gql`
query LoadOne($id: ID!){
  loadOneWatch(id: $id){
    name
    price
    category
    description
    brand
  }
}`;

export const LOAD_BY_CATEGORY = gql`
query LoadbyCategory($category : String!, $id: ID!){
	loadWatchByCategory(category: $category, id: $id){
        brand,
        name,
        description
        id
    }
}`;

export const LOAD_USER_CART = gql`
query loadUserCart($user_id: ID!){
  getUserCartData(user_id: $user_id){
      count,
      watch{
          name,
          price,
          brand
      }
  }
}`;

export const LOAD_SPECEIFIC_COUNT = gql`
mutation speceficCount($user_id: ID!, $watch_id: ID!){
  speceficCartCount(user_id: $user_id, watch_id: $watch_id){
      count,
  }
}`;

export const ADD_TO_CART = gql`
mutation addToCart($user_id: ID!, $watch_id: ID!, $count: Int!){
	addUserCartData(user_id: $user_id, watch_id: $watch_id, count: $count){
      id
    }
}`;

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!){
	loginUser(email: $email, password: $password){
        id,
        token
    }
}`;