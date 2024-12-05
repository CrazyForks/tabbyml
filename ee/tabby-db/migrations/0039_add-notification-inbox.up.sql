CREATE TABLE notifications (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,

  created_at TIMESTAMP NOT NULL DEFAULT(DATETIME('now')),
  updated_at TIMESTAMP NOT NULL DEFAULT(DATETIME('now')),

  -- enum of ADMIN, ALL_USERS
  kind TEXT NOT NULL,

  -- content of notification, in markdown format.
  content TEXT NOT NULL,
)

CREATE TABLE readed_notifications (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  notification_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (notification_id) REFERENCES notifications(id) ON DELETE CASCADE,
)