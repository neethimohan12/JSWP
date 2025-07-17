// ✅ Define the SimpleValidator object
const SimpleValidator = {
  fields: {},
  errors: {},
  state: {},

  addField(name, value = "") {
    this.fields[name] = { value, validators: [] };
    return this;
  },

  setValue(name, value) {
    if (this.fields[name]) {
      this.fields[name].value = value;
    }
    return this;
  },

  required(name, message = "This field is required.") {
    this.fields[name].validators.push({
      type: "sync",
      fn: value => value.trim() !== "",
      message
    });
    return this;
  },

  sameAs(field, targetField, message = "Fields must match.") {
    this.fields[field].validators.push({
      type: "sync",
      fn: () => this.fields[field].value === this.fields[targetField].value,
      message
    });
    return this;
  },

  asyncCheck(name, fn, message = "Async check failed.") {
    this.fields[name].validators.push({
      type: "async",
      fn,
      message
    });
    return this;
  },

  async validate() {
    this.errors = {};
    const asyncTasks = [];

    for (const [name, field] of Object.entries(this.fields)) {
      for (const rule of field.validators) {
        if (rule.type === "sync") {
          const valid = rule.fn(field.value);
          if (!valid) {
            this.errors[name] = rule.message;
            break;
          }
        } else if (rule.type === "async") {
          asyncTasks.push(
            rule.fn(field.value).then(valid => {
              if (!valid && !this.errors[name]) {
                this.errors[name] = rule.message;
              }
            })
          );
        }
      }
    }

    await Promise.all(asyncTasks);
    return Object.keys(this.errors).length === 0;
  },

  getErrors() {
    return this.errors;
  },

  saveState() {
    this.state = JSON.stringify(this.fields);
    return this.state;
  },

  loadState(stateString) {
    this.fields = JSON.parse(stateString);
    return this;
  }
};

// ✅ Async check function (simulate a server check)
const isUsernameAvailable = async (name) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(name !== "admin"), 300);
  });
};

// ✅ Set up and validate
SimpleValidator
  .addField("username")
  .required("username", "Username cannot be empty.")
  .asyncCheck("username", isUsernameAvailable, "Username not available.")

  .addField("password")
  .required("password")

  .addField("confirm")
  .required("confirm")
  .sameAs("confirm", "password", "Passwords do not match.");

// ✅ Simulate user input
SimpleValidator
  .setValue("username", "admin")
  .setValue("password", "pass123")
  .setValue("confirm", "pass123");

(async () => {
  const isValid = await SimpleValidator.validate();
  console.log("✅ Valid:", isValid);
  console.log("❌ Errors:", SimpleValidator.getErrors());
})();