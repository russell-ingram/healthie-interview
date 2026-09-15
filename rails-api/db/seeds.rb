# Safe to run repeatedly: every record is looked up before it's created.

dana = Provider.find_or_create_by!(email: "dana@example.com") { |user| user.name = "Dana Reyes" }
marcus = Provider.find_or_create_by!(email: "marcus@example.com") { |user| user.name = "Marcus Hill" }
Provider.find_or_create_by!(email: "priya@example.com") { |user| user.name = "Priya Shah" }

alex = Client.find_or_create_by!(email: "alex@example.com") { |user| user.name = "Alex Chen" }
jordan = Client.find_or_create_by!(email: "jordan@example.com") { |user| user.name = "Jordan Park" }
sam = Client.find_or_create_by!(email: "sam@example.com") { |user| user.name = "Sam Lee" }

# Alex sees two providers on different plans; Priya has no clients yet.
[
  [dana, alex, "premium"],
  [marcus, alex, "basic"],
  [dana, jordan, "basic"],
  [marcus, sam, "premium"]
].each do |provider, client, plan|
  Enrollment.find_or_create_by!(provider: provider, client: client) { |enrollment| enrollment.plan = plan }
end

# Written out of date order, and interleaved across clients, so sorting is visible.
[
  [alex, 2, "Thirty minute walk after dinner. Legs felt good."],
  [jordan, 6, "Hit my water goal three days running."],
  [alex, 9, "Oatmeal with berries for breakfast. Full until lunch."],
  [sam, 1, "Tried the new meal prep plan. Lunches sorted for the week."],
  [jordan, 3, "Skipped the afternoon soda, had sparkling water instead."],
  [alex, 5, "Slept badly and grabbed a pastry. Back on track tomorrow."],
  [sam, 7, "Blood sugar steadier since cutting back on juice."]
].each do |client, days_ago, body|
  client.journal_entries.find_or_create_by!(body: body) { |entry| entry.created_at = days_ago.days.ago }
end
