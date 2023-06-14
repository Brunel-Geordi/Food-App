create database malewa;
use malewa;

create table users(id int not null primary key auto_increment, mail varchar(50) not null , name varchar(50) not null, password varchar(150) not null, token varchar(150) not null, role varchar(10) default  'client', fidelity int default 0 check ( users.fidelity < 500 ));
create table boissons(id_bg int not null primary key auto_increment, name varchar(50) not null , image varchar(100) not null , price float not null);
create table desserts(id_bg int not null primary key auto_increment, name varchar(50) not null , image varchar(100) not null , price float not null);
create table snacks(id_bg int not null primary key auto_increment, name varchar(50) not null , image varchar(100) not null , price float not null);
create table burgers(id_bg int not null primary key auto_increment, name varchar(50) not null , image varchar(100) not null , price float not null);
create table commande(id int not null primary key auto_increment, date datetime default current_timestamp, qte int not null , montant float not null, name varchar(50) not null, boisson varchar(50) default null, snack varchar(50) default null, status varchar(50) default 'En attente', id_users int not null);
create table panier(id int not null primary key auto_increment, montant float not null, datetime datetime default current_timestamp, qte int not null, name varchar(50) not null, boisson varchar(50) default null, snack varchar(50) default null, image varchar(100) not null , id_users int not null);
create table menu(id_bg int not null primary key auto_increment, name varchar(50) not null , image varchar(100) not null , price float not null, id_burger int default null ,id_boisson int default null, id_snack int default null );
create table test.option(id_bg int not null primary key auto_increment, name varchar(50) not null, image varchar(100) not null);

alter table commande add constraint fk_cmd_users foreign key (id_users) references users(id);
alter table panier add constraint fk_panier_users foreign key (id_users) references users(id);
alter table menu add constraint fk_menu_burgers foreign key (id_burger) references burgers(id_bg);
alter table menu add constraint fk_menu_boissons foreign key (id_boisson) references boissons(id_bg);
alter table menu add constraint fk_menu_snacks foreign key (id_snack) references snacks(id_bg);

INSERT INTO users (mail, name, password, token, role)
VALUES
    ('julina@dani.fr', 'Julina Danielle', '$2b$10$Jx7QmXW70Qxtj.7ZUUNZW.i0St77j6AZHnXN5TkB2E1SWqzv6yK9e', '$2b$10$Jx7QmXW70Qxtj.7ZUUNZW.ZqB0TMaXTaVFLfcdMYjH3GzhSpQdT2y', 'client'),
    ('admin@admin.com', 'Brunel Geordi', '$2b$10$4y4V8a4HjF9gZkwNaw9dZe7CEuo5rbsFk/HjmqTlBVV5uNiDoTcNq', '$2b$10$4y4V8a4HjF9gZkwNaw9dZe6jigiCNB/MTJwx6XW4CT58BJ0WLUYI6', 'admin');


INSERT INTO `option` VALUES (1,'Frittes','/snacks/frittes.png'),
                            (2,'Potatos','/snacks/potato.png'),(3,'Salade','/snacks/mini_salade.png');

INSERT INTO `menu`(name, image, price) VALUES ('Menu Whopper','/menus/m_whopper.png',7.65),
                          ('Menu long cheese burger','/menus/m_lg_ch.png',8.55),
                          ('Menu Steak House','/menus/m_steakhouse.png',7),
                          ('Menu Beef burger','/menus/m_beef_burger.png',6.99),
                          ('Menu Wrap','/menus/m_wrap.png',6.55),
                          ('Menu BG Lite','/menus/m_gb_lite.png',5.75),
                          ('Menu Special BG','/menus/m_big_bg_special.png',7.99),
                          ('Master italien','/menus/m_italien.png',7.99),
                          ('Double cheese-steak','/menus/m_db_steak.png',6.45),
                          ('Chesse burger','/menus/m_cheese.png',5.25),
                          ('Menu Master Steak','/menus/m_steak.png',7.99);

INSERT INTO `desserts` VALUES (1,'Donut','/desserts/donut.png',2.5),
                              (2,'Fondu au chocolat','/desserts/fondu.png',3),
                              (3,'Cookie','/desserts/cookie.png',2),
                              (4,'Muffin','/desserts/muffin.png',2.5),
                              (5,'Tiramisu','/desserts/tiramisu.png',3.5),
                              (6,'Glace','/desserts/glace.png',3.5);

INSERT INTO `burgers` VALUES (1,'Whopper','/burgers/whopper.png','5.45'),
                             (2,'Long Chesseburger','/burgers/Long_Cheese_Burger.png','6.00'),
                             (3,'Steak House','/burgers/steakhouse.png','5.00'),
                             (4,'Beff Burger','/burgers/beef_burger.png','3.50'),
                             (5,'Wrap','/burgers/wrap.png','4.50'),
                             (6,'BG Lite','/burgers/gb_lite.png','4.00'),
                             (7,'Special BG','/burgers/big_bg_special.png','4.00'),
                             (8,'L\'Italien','/burgers/italien.png','5.00'),
                             (9,'Double Cheese-steack ','/burgers/db_steak.png','5.00'),
                             (10,'Cheese-burger','/burgers/cheese.png','2.50'),
                             (11,'Steak saignant','/burgers/steak.png','5.50'),
                             (12,'Le vegan','/burgers/vegan.png','5.50'),
                             (13,'Salade au poulet','/burgers/salad.png','5.00');


INSERT INTO `boissons` VALUES (1,'Coca-Cola','/boissons/coca_cola.png','2.00'),
                              (2,'Orangina','/boissons/orangina.png','1.50'),
                              (3,'Eau Cristaline','/boissons/cristaline.png','1'),
                              (4,'Fanta','/boissons/fanta.png','2.50'),
                              (5,'Ice-tea','/boissons/lipton.png','2.00'),
                              (6,'Oasis tripical','/boissons/oasis.png','2.00'),
                              (7,'San Pelligrino','/boissons/san.png','1.50'),
                              (8,'Sprite','/boissons/sprite.png','2.00');

INSERT INTO `snacks` VALUES (1,'Frittes Long','/snacks/frittes.png',2),
                            (2,'Wings','/snacks/wing.png',3.65),
                            (3,'Nuggets','/snacks/nuggets.png',4.3),
                            (4,'Oignons Rings','/snacks/rings.png',3),
                            (5,'Potatos','/snacks/potato.png',2.5);