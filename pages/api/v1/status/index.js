function status(request, response) {
  response.status(200).json({ chave: "não" });
}

export default status;
