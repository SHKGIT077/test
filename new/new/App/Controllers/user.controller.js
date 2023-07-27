"use strict";
const express = require("express");

const { User_model } = require('../Models/user.model')
// const { validationResult } = require('../Utils/mongo_connection')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;
const { dbUri, dbName } = require("../Utils/index");

const { MongoClient } = require('mongodb');

const client = new MongoClient(dbUri, { useUnifiedTopology: true });




// Product CLASS
class Employee {
    async AddEmployee(req, res) {
       

        try {
        //  await    deleteAllViews();
        //     return
            // console.log("RUN");
           
            const documents = await User_model.find();
            
            

            // documents.forEach(async(element) => {

            //     const pipeline = [
            //         { $match:  { '_id': element._id, 'trading_status': "1"} }
                    
            //       ];
            //  await  createView(element.name , "user_models" , pipeline);


            // });

            res.send({status:true,length:documents.length,data:documents})


        }
        catch (error) {
            res.send({ msg: "Error=>", error })
        }

    }
}


async function getAllViewsData() {
   
    const database = client.db(dbName);
  
      // Retrieve a list of all views in the database
      const views = await database.listCollections({ type: 'view ' }).toArray();
      console.log("views",views);
     
    
} 

async function deleteAllViews() {
    try {
        const database = client.db(dbName);
  
      // Retrieve a list of all views in the database
      const views = await database.listCollections({ type: 'view' }).toArray();
  
      // Iterate over the views and drop each one
      for (const view of views) {
        await database.dropCollection(view.name);
        console.log(`View '${view.name}' deleted successfully`);
      }
    } catch (err) {
      console.error('Failed to delete views:', err);
    } finally {
      await client.close();
    }
  }
  

  
  
  
  
  
  



async function createView(viewName, sourceCollection, pipeline) {
    try {
      const database = client.db(dbName);
      await database.createCollection(viewName, {
        viewOn: sourceCollection,
        pipeline: pipeline
      });
      console.log(`View '${viewName}' created successfully`);
    } catch (err) {
      console.error(`Failed to create the view '${viewName}':`, err);
    }
  }


module.exports = new Employee();