package com.twu.refactoring.movie;

import com.twu.refactoring.MovieAbstract;
import com.twu.refactoring.Rental;

public class ChildrensMovie extends MovieAbstract{

	@Override
	public double getPrice(Rental each) {
		double moviePrice = 1.5;
		if (each.getDaysRented() > 3) {
			moviePrice += (each.getDaysRented() - 3) * 1.5;	
		}
		return moviePrice;
	}
	
}
