$.getJSON("http://freegeoip.net/json/", function(data) {
    var country = data.country_name;
    var ip = data.ip;
    var countryCode = data.country_code;
    alert(countryCode);
    alert(country);
});