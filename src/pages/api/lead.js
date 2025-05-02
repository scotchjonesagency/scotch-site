export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email } = req.body;
  
      // TODO: Save to DB or email marketing service (optional)
  
      console.log('New lead:', { name, email });
  
      res.status(200).json({ success: true });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  