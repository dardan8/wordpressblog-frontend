// import { fetchAPI } from "./base";

// export async function getPosts() {
//   const data = await fetchAPI(
//     `query FetchPosts($first: Int = 10) {
//         recipes(first: $first) {
//             nodes {
//                 id
//                 title
//                 diets {
//                   nodes {
//                     name
//                   }
//                 }
//                 mealTypes {
//                   nodes {
//                     name
//                   }
//                 }
//                 recipeId
//                 recipeAuthor(format: RAW)
//                 recipeInstructions(format: RAW)
//                 slug
//                 recipeIngredients
//               }`,
//     {
//       variables: {
//         first,
//       },
//     }
//   );

//   return data?.posts?.nodes;
// }
