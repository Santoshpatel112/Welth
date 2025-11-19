-- Enable Row Level Security on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE budgets ENABLE ROW LEVEL SECURITY;

-- Users table policies
-- Users can only read their own data
CREATE POLICY "Users can view own data" ON users
  FOR SELECT
  USING (clerk_user_id = current_setting('app.current_user_id', true));

-- Users can update their own data
CREATE POLICY "Users can update own data" ON users
  FOR UPDATE
  USING (clerk_user_id = current_setting('app.current_user_id', true));

-- Accounts table policies
-- Users can view their own accounts
CREATE POLICY "Users can view own accounts" ON accounts
  FOR SELECT
  USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

-- Users can insert their own accounts
CREATE POLICY "Users can insert own accounts" ON accounts
  FOR INSERT
  WITH CHECK (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

-- Users can update their own accounts
CREATE POLICY "Users can update own accounts" ON accounts
  FOR UPDATE
  USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

-- Users can delete their own accounts
CREATE POLICY "Users can delete own accounts" ON accounts
  FOR DELETE
  USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

-- Transactions table policies
-- Users can view their own transactions
CREATE POLICY "Users can view own transactions" ON transactions
  FOR SELECT
  USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

-- Users can insert their own transactions
CREATE POLICY "Users can insert own transactions" ON transactions
  FOR INSERT
  WITH CHECK (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

-- Users can update their own transactions
CREATE POLICY "Users can update own transactions" ON transactions
  FOR UPDATE
  USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

-- Users can delete their own transactions
CREATE POLICY "Users can delete own transactions" ON transactions
  FOR DELETE
  USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

-- Budgets table policies
-- Users can view their own budgets
CREATE POLICY "Users can view own budgets" ON budgets
  FOR SELECT
  USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

-- Users can insert their own budgets
CREATE POLICY "Users can insert own budgets" ON budgets
  FOR INSERT
  WITH CHECK (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

-- Users can update their own budgets
CREATE POLICY "Users can update own budgets" ON budgets
  FOR UPDATE
  USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

-- Users can delete their own budgets
CREATE POLICY "Users can delete own budgets" ON budgets
  FOR DELETE
  USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));
