decrypt: function() {
    this.getPassword();
    this.getCypherText();
    return CryptoJS.AES.decrypt(this.cypherText, this.password).toString(CryptoJS.enc.Utf8);
  }

document.getElementById('decrypt').onclick = function() { alert(decoder.decrypt()); };
