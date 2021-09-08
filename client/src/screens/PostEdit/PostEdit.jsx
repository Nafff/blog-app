function PostEdit() {
  const tacoTypes = ['Carne Asada', 'Shrimp Tacos', 'Barbacoa', 'Tinga Tacos']
  return (
    <>
    <h1>TacoTown</h1>
      <h2>Population: 15 Taco Bells</h2>
      <p>I’ve been following that taco truck around all day. Tacos, again? This will be 5 times this week and it’s only Tuesday. You see, the refried beans are really just the adhesive necessary to apply the soft tortilla to the hard taco shell. 50 cent tacos! I’ll take 30. I’d have to say, those tacos are on fleek. How bout a gosh darn quesadilla? Shrimp tacos are tasty tacos! Let’s do a beef and a chicken, and one with both. Tacos, tacos, tacos.</p>
      {tacoTypes.map((taco) => {
        return (
          <h5>{taco}</h5>
        )
      })}
    </>
  )
}

export default PostEdit;