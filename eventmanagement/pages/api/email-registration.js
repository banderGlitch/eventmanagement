import fs from 'fs';
import path from 'path';

function buildPath() {
    return path.join(process.cwd(), 'data', 'data.json')
}
function extractData(filePath) {
    const jsonData = fs.readFileSync(filePath)
    const data = JSON.parse(jsonData)
    return data
}
export default function handler(req, res) {
    const { method } = req
    const filePath = buildPath();
    const { events_categories, allEvents } = extractData(filePath)
    if (method === 'POST') {

        if (!email | !email.includes('@')) {
            res.status(422).json({ message: 'Invalid email address' })
        }
        const { email, eventId } = req.body;
        const new_events = allEvents.map((ev) => {
            if (ev.id === eventId) {
                if (ev.emails_registered.includes(email)) {
                    res.status(409).json({ message: 'This email has already been registered' })
                    return ev
                }
                return {
                    ...ev, emails_registered: [...ev.emails_registered, email]
                }
            }
            return ev;
        })
        fs.writeFileSync(filePath, JSON.stringify({ events_categories, allEvents: new_events }))
        return res.status(200).json({ message: `You have successfully registered for this event : ${eventId} with this email : ${email} `, eventID: allEvents })

    }

}