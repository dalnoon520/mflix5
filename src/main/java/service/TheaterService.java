package service;

import DAO.MongoDB.AbsDAO;
import DAO.MovieDB.TheaterDAO;
import com.mongodb.client.FindIterable;
import model.Theater;

import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;

public class TheaterService extends AbsDAO {
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public ArrayList<Theater> getListTheater() {
        FindIterable<Theater> list = new TheaterDAO().getListTheater();
        return list.into(new ArrayList<>());
    }
}
