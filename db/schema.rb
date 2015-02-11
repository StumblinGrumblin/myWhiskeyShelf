# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150209224204) do

  create_table "whiskies", force: true do |t|
    t.string   "name"
    t.string   "region"
    t.string   "color"
    t.string   "body"
    t.string   "nose"
    t.string   "palatte"
    t.string   "finish"
    t.string   "notes"
    t.string   "image_url"
    t.string   "point_of_sale"
    t.decimal  "price",         precision: 6, scale: 2
    t.integer  "size"
    t.decimal  "abv",           precision: 2, scale: 2
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "score"
  end

end
