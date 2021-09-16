## PostgreSQL Commands :

Connect to Postgres Server -

```zsh
% psql -h localhost -p [port](in general - 5432) -U [User_name] {database_name}

% psql --help [for all the helpful commands]
```

Another way to connect to database -

```zsh
% psql
```

After entering the psql CLI

[Note - Use Semicolon to execute an SQL command]

To list all Databases -

```psql
=> \l
```

To quit psql CLI -

```psql
=> \q
```

To check all the users -

```psql
=> \du
```

To create a Database -

```psql
=> CREATE DATABASE {database_name};
```

To delete a Database -

```psql
=> DROP DATABASE {database_name};
```

To connect with a Database -

```zsh
=> \c database_name
```

To Create Table -

```zsh
=> CREATE TABLE table_name(
	ID INT PRIMARY KEY SERIAL,
	column_name1 data_type + constraints if any,
	column_name2 data_type + constraints if any,
	…,
	…,
	…
	);
```

To Delete Table -

```zsh
=> DROP TABLE table_name;
```
