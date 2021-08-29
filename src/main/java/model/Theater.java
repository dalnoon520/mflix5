package model;

import lombok.Data;
import org.bson.types.ObjectId;

import javax.xml.stream.Location;

@Data
public class Theater {
    private ObjectId id;
    private Location location;
}