let Person = (function () {
  _fname = "David"
  _lname = "Freeman"
  
  function sayName () {
    console.log(this._fname, this._lname)
  }

  function setName (fname, lname) {
    this._fname = fname
    this._lname = lname
  }

  return {
    sayName: sayName,
    setName: setName
  }
})()

module.exports = Person