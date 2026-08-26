function status(request, response) {
  //   response.status(200).send("Tudo está certo, bão?");

  response.status(200).json({ chave: "Tudo está certo, bão?" });
}

export default status;
