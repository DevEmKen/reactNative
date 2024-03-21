## A test application built with React Native, Expo, Apollo, GraphQL, and MongoDB.

### Alternatively, watch the demo video "appvid.mp4"

To run, first download Docker and start an instance of the mongoDB server with the command:
`docker run -d mongo:latest`
Then identify the IP address of the mongoDB instance through Inspect -> Networks -> IPAddress field. Change the IP address in the .env file in the "nativeedit" folder to match this identified mongoDB server IP. The port should remain default: 27017.
Run `npm install` inside both the nativeedit and serv folder to give access to necessary packages for both applications.

## The Experience

Setting up expo and the template react native app was a breeze. As someone who has only worked with React.js before, though, I had to spend some time acquainting myself with the default components of React Native, especially ScrollView and FlatList.

The first major hurdle was setting up the Apollo server that serves as the middleware between the Apollo client and MongoDB. To help with this, I created some template files based off a Todo app courtesy of https://www.youtube.com/@ckmobile/. This helped me write the type definitions, the necessary code for mongoose, and the resolvers in a less error-prone way. However, the Apollo server was talking to the centralized mongoDB server online, when I want it to talk to a containerized Docker instance. I then realized it would be best to containerize the Apollo server too.

So then I set up Docker. I had to spend some time learning about the dockerfile and even containerization as a concept. For my needs, though, a very basic dockerfile sufficed, and after some time I got my expo app communicating with my dockerized Apollo server and MongoDB instance.

Nice! I seeded my MongoDB server with 6 products, and loaded them all at once. I implemented client-side sorting even though it is unrealistic in this scenario, just to see how it would work to mirror state between an unsorted Apollo query and a mirrored useState that is kept updated with a useEffect. Quickly, though, I scrapped this idea in favor of learning proper server-side paging and sorting in GraphQL.

It was a lot! Honestly I'm not even sure where to begin when talking about discussing what I learned. It was accomplished mostly by writing code that I translated/personalized from the GraphQL or Apollo docs, and then debugging the million things that I did wrong. Often I tried to simplify things to make debugging easier. One simplification that stuck around is the fact that I am using integer index-based pagination instead of a proper String-ID cursor. The most mind-bending concept was understanding the relationship between the cache and functions like fetchMore, and how the caching policy comes into play. I still don't really know what keyArgs does - but if I ever change it from "false," horrible, unexplainable things seem to happen. Luckily, through the "args" field and some conditional checks, I was able to write a coherent cache policy that either overwrites or appends. It's a little crazy when I put it like that - getting the cache to simply overwrite instead of appending, or vice versa, was the most difficult part about this! The feeling of getting it working was beautiful.
