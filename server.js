const express = require("express");
const translate = require("@vitalets/google-translate-api");

const app = express();

app.get("/translate", async (req, res) => {
    const q = req.query.q;
    if (!q) return res.json({ text: "" });

    try {
        const result = await translate(q, { from: "en", to: "vi" });
        res.json({ text: result.text });
    } catch (err) {
        console.error(err);
        res.json({ text: "(không dịch được)" });
    }
});

app.listen(3000, () => {
    console.log("✅ Translator running at http://localhost:3000");
});
