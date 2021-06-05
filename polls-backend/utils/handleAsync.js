const foo = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
}

export default foo;
