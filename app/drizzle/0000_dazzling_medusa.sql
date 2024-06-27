CREATE TABLE `app_insights` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`app_id` text,
	`app_key` text,
	`created` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE `cities` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`country_id` integer,
	FOREIGN KEY (`country_id`) REFERENCES `countries`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `countries` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text,
	`text_modifiers` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`int_modifiers` integer DEFAULT false NOT NULL,
	`full_name` text,
	`phone` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `nameIdx` ON `countries` (`name`);