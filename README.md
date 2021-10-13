# cypress_simple_login

Succesful login

Preconditions:

* User unable to log in without typing email adress and password
* User exists (abcd@gmail.com / zaq!@WSX) 
* User at /login

Steps:

1. Click log-in button and check if user is able to log-in
2. Type correct email
3. Type correct password
4. Check if user is navigated to dashboard account

Expected result:
1. Log-in unavaible - user is notified to type email and password
4. User is logged-in and navigated to dashboard account
