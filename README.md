# App

GymPass style app.

## RFs (Requisitos funcionais)

- [x] Should be possible register yourself;
- [x] Should be possible authenticate yourself;
- [ ] Should be possible get the logged user's profile;
- [ ] Should be possible get the check-ins number done by the logged user;
- [ ] Should be possible the user get him check-ins history;
- [ ] Should be possible the user get the nearby gyms;
- [ ] Should be possible the user get the gyms by the name;
- [x] Should be possible the user do check-in in a gym;
- [ ] Should be possible validate the user's check-in;
- [ ] Should be possible register a gym;

## RNs (Regras de negócio)

- [x] The user shouldn't be able to register using a duplicated e-mail;
- [ ] The user shouldn't be able to do 2 check-in in the same day;
- [ ] The user shouldn't be able to check-in if he isn't nearby (100m) of the gym;
- [ ] The check-in only can be validated up to 20 minutes after created;
- [ ] The check-in only can be validated by administrators;
- [ ] The gym only can be registered by administrators

## RNFs (Requisitos não funcionais)

- [x] The user's password must be cryptographed;
- [x] The application data must be persisted on a PostgreSQL database;
- [ ] Every data list must be paginated with 20 itens per page;
- [ ] The user must be identified by a JWT (Json Web Token);