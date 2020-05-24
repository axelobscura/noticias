export default (req, res) => {
    if (req.method === 'POST') {
        const { email, name } = req.body;
        console.log(req.body);
        res.send('success');
    } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ name: 'John Doe' }))
    }
  }