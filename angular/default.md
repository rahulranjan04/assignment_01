Welcome to <%= projectName %> 👋
<% if (isProjectOnNpm) { -%> Version <% } -%> <% if (projectVersion && !isProjectOnNpm) { -%> Version <% } -%> <% if (projectPrerequisites) { -%> <% projectPrerequisites.map(({ name, value }) => { -%>  <% }) -%> <% } -%> <% if (projectDocumentationUrl) { -%> Documentation <% } -%> <% if (isGithubRepos) { -%> Maintenance <% } -%> <% if (licenseName) { -%> License: <%= licenseName %> <% } -%> <% if (authorTwitterUsername) { -%> Twitter: <%= authorTwitterUsername %> <% } -%>

<% if (projectDescription) { -%>
<%= projectDescription %> <% } -%> <% if (projectHomepage) { -%>

🏠 Homepage
<% } -%> <% if (projectDemoUrl) { -%>

✨ Demo
<% } -%> <% if (projectPrerequisites && projectPrerequisites.length) { -%>

Prerequisites
<% projectPrerequisites.map(({ name, value }) => { -%>

<%= name %> <%= value %> <% }) -%> <% } -%> <% if (installCommand) { -%>
Install
<%= installCommand %>
<% } -%> <% if (usage) { -%>

Usage
<%= usage %>
<% } -%> <% if (testCommand) { -%>

Run tests
<%= testCommand %>
<% } -%> <% if (authorName || authorTwitterUsername || authorGithubUsername) { -%>

Author
<% if (authorName) { %> 👤 <%= authorName %> <% } %> <% if (authorWebsite) { -%>

Website: <%= authorWebsite %> <% } -%> <% if (authorTwitterUsername) { -%>
Twitter: [@<%= authorTwitterUsername %>](https://twitter.com/<%= authorTwitterUsername %>) <% } -%> <% if (authorGithubUsername) { -%>
Github: [@<%= authorGithubUsername %>](https://github.com/<%= authorGithubUsername %>) <% } -%> <% if (authorLinkedInUsername) { -%>
LinkedIn: [@<%= authorLinkedInUsername %>](https://linkedin.com/in/<%= authorLinkedInUsername %>) <% } -%> <% } -%> <% if (contributingUrl) { -%>