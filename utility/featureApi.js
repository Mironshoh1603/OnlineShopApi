class FeatureApi {
  constructor(query, databaseQuery) {
    this.query = query;
    this.databaseQuery = databaseQuery;
  }
  filter() {
    let queryC = JSON.stringify(this.query);
    queryC = queryC.replace(/\bgt|gte|lte|lt\b/g, (val) => `$${val}`);
    let queryData = JSON.parse(queryC);
    this.databaseQuery = this.databaseQuery.find(queryData);
    return this;
  }
  sorting() {
    if (this.query.sort) {
      let sortQuery = this.query.sort.split(",").join(" ");
      this.databaseQuery = this.databaseQuery.sort(sortQuery);
    } else {
      this.databaseQuery = this.databaseQuery.sort("createdAt");
    }
    return this;
  }

  field() {
    if (this.query.field) {
      let fieldQuery = this.query.field.split(",").join(" ");
      this.databaseQuery = this.databaseQuery.select(fieldQuery);
    } else {
      this.databaseQuery = this.databaseQuery.select("-__v");
    }
    return this;
  }
  pagination() {
    let page = +this.query.page || 1;
    let limit = +this.query.limit || 100;
    this.databaseQuery = this.databaseQuery
      .skip((page - 1) * limit)
      .limit(limit);
    return this;
  }
}

module.exports = FeatureApi;
