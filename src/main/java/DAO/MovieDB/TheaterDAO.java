package DAO.MovieDB;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import model.Theater;

public class TheaterDAO {
    public FindIterable<Theater> getListTheater() {
        MongoCollection<Theater> theaters = getDB().getCollection("theaters", Theater.class);
        FindIterable<Theater> list = theaters.find();
        return list;
    }
}
