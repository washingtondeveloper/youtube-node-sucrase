class ContactsController {
	index(req, res) {
		return res.json({ message: 'API' });
	}
}

export default new ContactsController();
