const getAll = (req, res) => {
    res.send("Task list controller1");
    throw new Error("boken")
}

const getDetail = (req, res) => {
    res.send("Task details");
}

const create = (req, res) => {
    const newTask = {
        title: req.body.title,
    };

    res.success(newTask, 201);
}

const toggle = (req, res) => {
    res.send("Toggle task status");
}
module.exports = { getAll, getDetail, create, toggle };
