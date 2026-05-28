<html>
<head>
<title>Login</title>
<link rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
<form onsubmit="return validateLogin()" class="needs-validation" novalidate>
<h2>Login</h2>
<input type="email" id="loginEmail" placeholder="Email" />
<input type="password" id="loginPassword" placeholder="Password" />
<button type="submit" class="btn btn-primary">Login</button>
</form>
<script src="script.js"></script>
</body>
</html>
