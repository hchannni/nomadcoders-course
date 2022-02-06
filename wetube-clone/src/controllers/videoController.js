export const rootVideos = (req, res) => res.send("Home Page Videos");

export const search = (req, res) => res.send("Search Video");

export const upload = (req, res) => res.send("Upload Video");

export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`) 
}

export const edit = (req, res) => res.send("Edit Video");

export const remove = (req, res) => res.send("Remove Video");