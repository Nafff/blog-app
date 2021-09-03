import db from '../db/connection.js'
import Post from '../models/post.js'

const insertData = async () => {
  await db.dropDatabase()

  const posts = [
    {
      title: "Test Post 1",
      author: "Taco Gang",
      details: "Every day is taco ipsum tuesday. I think I’ve overdosed on tacos. TACOS!! Give me tacos, or give me death. Add in a few el Pastor with guac and diced onions. How bout a gosh darn quesadilla? Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. Josh’s taco shack is the best taco shack. Um, Tabasco? No thanks, do you have any Cholula?",
      relevantLinks: "https://www.tacobell.com/",
    },
    {
      title: "Test Post 2",
      author: "Banana Gang",
      details: "Minions ipsum ti aamoo! Bee do bee do bee do wiiiii hana dul sae wiiiii. Hahaha tank yuuu! Po kass jiji bananaaaa butt. La bodaaa hahaha underweaaar butt bappleees chasy underweaaar hana dul sae. Uuuhhh butt bee do bee do bee do tulaliloo bappleees. Underweaaar bappleees belloo! Me want bananaaa!",
      relevantLinks: "https://en.wikipedia.org/wiki/Banana",
    }
  ]

  await Post.insertMany(posts)
  console.log("Created posts!")

  db.close()
}

insertData()